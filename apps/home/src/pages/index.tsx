import { AccountPageContainer } from './AccountPage/AccountPage.container';
import { BoardDetailsPageContainer } from './BoardDetailsPage/BoardDetailsPage.container';
import { BrowsePageContainer } from './BrowsePage/BrowsePage.container';
import { DocsPageContainer } from './DocsPage/DocsPage.container';
import { HomePageContainer } from './HomePage/HomePage.container';
import { MobilePage } from './MobilePage/MobilePage';
import { NewBoardPageContainer } from './NewBoardPage/NewBoardPage.container';
import { NewReviewPageContainer } from './NewReviewPage/NewReviewPage.container';
import { PrivacyPolicyPageContainer } from './PrivacyPolicyPage/PrivacyPolicyPage.container';
import { ReportIssuePageContainer } from './ReportIssuePage/ReportIssuePage.container';
import { SettingsPageContainer } from './SettingsPage/SettingsPage.container';
import { TermsOfUsePageContainer } from './TermsOfUsePage/TermsOfUsePage.container';

export const pages = {
  account: AccountPageContainer,
  home: HomePageContainer,
  browse: BrowsePageContainer,
  boardDetails: BoardDetailsPageContainer,
  settings: SettingsPageContainer,
  newBoard: NewBoardPageContainer,
  newReview: NewReviewPageContainer,
  docs: DocsPageContainer,
  mobile: MobilePage,
  reportIssue: ReportIssuePageContainer,
  termsOfUse: TermsOfUsePageContainer,
  privacyPolicy: PrivacyPolicyPageContainer,
};
