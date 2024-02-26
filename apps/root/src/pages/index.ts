import { RootPageContainer } from './RootPage/RootPage.container';
import { AccountPageContainer } from './AccountPage/AccountPage.container';
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
  root: RootPageContainer,
  account: AccountPageContainer,
  home: HomePageContainer,
  browse: BrowsePageContainer,
  settings: SettingsPageContainer,
  newBoard: NewBoardPageContainer,
  newReview: NewReviewPageContainer,
  docs: DocsPageContainer,
  mobile: MobilePage,
  reportIssue: ReportIssuePageContainer,
  termsOfUse: TermsOfUsePageContainer,
  privacyPolicy: PrivacyPolicyPageContainer,
};
