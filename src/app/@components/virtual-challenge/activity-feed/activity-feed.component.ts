import { KeyValue } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserProfileDetails } from './user-profile-details';
import * as moment from 'moment';
import { VirtualChallengeMember, VirtualChallengeTeam } from 'src/app/@core/interfaces/virtual-challenge.interface';
import { FirebaseService } from 'src/app/@core/firebase';
import { localStorageConstant, LocalStorageService, XMomentService } from 'src/app/@core/utils';
import { VirtualChallengeTeamDataService } from 'src/app/@core/data';

@Component({
  selector: 'app-virtual-challenge-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss'],
})
export class ActivityFeedComponent implements OnInit, OnChanges {
  @Input() teamDetail: VirtualChallengeTeam;
  @Input() teamMemberDetail: VirtualChallengeMember[];
  public userData = this.localStorageService.getUser() || null;
  constructor(
    private translate: TranslateService,
    private firebaseService: FirebaseService,
    private localStorageService: LocalStorageService,
    private xMomentService: XMomentService,
    private virtualChallengeTeamDataService: VirtualChallengeTeamDataService,
  ) {}

  public teamFeedData;
  public teamFeedDataLength = 5;
  public selectedIndex = -1;
  public activityFeedDate;
  public btnFlag = false;
  public userProfileDetails: Array<UserProfileDetails>;
  public feedComment = null;
  public activityFeedLength = 0;
  public isCommunityChallenge = false;
  public totalLength = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.firebaseService.getTeamFeeds(this.teamDetail.id, '').on('value', (snap) => {
      this.teamFeedData = snap.val();
      if (this.teamFeedData) {
        this.totalLength = Object.keys(this.teamFeedData).length;
      } else {
        this.totalLength = 0;
      }
      let profileData = [];
      profileData = this.teamMemberDetail;
      this.userProfileDetails = profileData.map((element) => {
        return {
          profileId: element.profileId,
          profilePhoto: element.profilePhoto,
          memberName: element.firstName + ' ' + element.lastName,
        };
      });
    });
  }

  async ngOnInit(): Promise<void> {
    this.translate.setDefaultLang('en');
    this.activityFeedDate = this.xMomentService.defaultTimeWithTimezone('MDT').format('dddd, MMM DD YYYY');
    this.isCommunityChallenge =
      JSON.parse(this.localStorageService.get(localStorageConstant.challenge)).challengeType === 'COMMUNITY' ? true : false;
  }

  async toggleLike(feed) {
    // like - unlike comment
    // check for like object
    let likeDetails;
    const data = 'likes' in feed.value ? feed.value.likes : {};
    if (Object.keys(data).length > 0) {
      data[`${this.userData.id}`] = !feed.value.likes[this.userData.id];
      likeDetails = data;
    } else {
      data[`${this.userData.id}`] = true;
      likeDetails = data;
    }
    await this.firebaseService.addLikeToTeamFeed(this.teamDetail.id, feed.key, {}, likeDetails);
  }

  async displayLikeUnlike(feedData): Promise<string> {
    return 'true';
  }

  // tslint:disable-next-line: no-any
  async addFeedComment(feedData: { key: string; value: any }) {
    let keys = Object.keys(this.teamFeedData);

    let isFirstComment = true;
    for (let x of keys) {
      if (this.teamFeedData[x]['comments']) {
        isFirstComment = false;
        break;
      }
    }

    if (!this.feedComment || !this.feedComment.trim()) {
      return;
    }
    let commentDetails;
    let index;
    if ('comments' in feedData.value) {
      index = feedData.value.comments.length;
      commentDetails = {
        createdBy: this.userData.id,
        createdAt: this.xMomentService.defaultTime().toISOString(),
        profileId: this.userData.id,
        message: this.feedComment,
      };
      feedData.value.comments.push(commentDetails);
    } else {
      index = 0;
      if (isFirstComment) {
        this.virtualChallengeTeamDataService
          .firstCommentMail(this.teamDetail.id, {
            comment: this.feedComment,
            commenter: this.userData.fullName,
            teamName: this.teamDetail.name || this.teamDetail.teamName,
          })
          .subscribe();
      }
      commentDetails = {
        createdBy: this.userData.id,
        createdAt: this.xMomentService.defaultTime().toISOString(),
        profileId: this.userData.id,
        message: this.feedComment,
      };
    }

    this.firebaseService.addCommentToTeamFeed(this.teamDetail.id, feedData.key, index, commentDetails).then(() => {
      this.feedComment = null;
    });
    this.selectedIndex = -1;
  }

  fetchProfilePicture(profileId) {
    const result = this.userProfileDetails.find((element) => element.profileId === profileId);
    if (result && result.profilePhoto) {
      return result.profilePhoto;
    }
    return null;
  }

  fetchUserName(profileId) {
    const result = this.userProfileDetails.find((element) => element.profileId === profileId);
    if (result && result.memberName) {
      return result.memberName;
    }
    return 'Deleted Member';
  }

  fetchProfileInitials(profileId) {
    const result = this.userProfileDetails.find((element) => element.profileId === profileId);
    //   <span>{{ userData.firstName.charAt(0).toUpperCase() }}{{ userData.lastName.charAt(0).toUpperCase() }}</span>
    if (result) {
      const firstname = result.memberName.split(' ')[0].charAt(0).toUpperCase();
      const lastname = result.memberName.split(' ')[1]?.charAt(0)?.toUpperCase();
      return firstname + '' + lastname;
    }
    return 'DM';
  }

  fetchCommentTime(date) {
    return moment.utc(date).format('hh:mm A');
  }

  likesCount(likes) {
    let count = 0;
    Object.keys(likes).map((k) => (likes[k] === true ? count++ : null));
    return count;
  }

  showContent(index) {
    this.selectedIndex = index;
  }

  keyDescOrder(a: KeyValue<number, string>, b: KeyValue<number, string>): number {
    return a.key > b.key ? -1 : b.key > a.key ? 1 : 0;
  }

  showAll() {
    if (this.teamFeedDataLength <= 5) {
      this.btnFlag = true;
      this.teamFeedDataLength = Object.keys(this.teamFeedData).length;
    } else {
      this.btnFlag = false;
      this.teamFeedDataLength = 5;
    }
  }
}
