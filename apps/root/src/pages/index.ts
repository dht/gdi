import { AccountPageContainer } from './AccountPage/AccountPage.container';
import { AssetsPageContainer } from './AssetsPage/AssetsPage.container';
import { BrowsePageContainer } from './BrowsePage/BrowsePage.container';
import { CapabilitiesPageContainer } from './CapabilitiesPage/CapabilitiesPage.container';
import { DocsPageContainer } from './DocsPage/DocsPage.container';
import { FlowsPageContainer } from './FlowsPage/FlowsPage.container';
import { HistoryPageContainer } from './HistoryPage/HistoryPage.container';
import { HomePageContainer } from './HomePage/HomePage.container';
import { LogsPageContainer } from './LogsPage/LogsPage.container';
import { MapPageContainer } from './MapPage/MapPage.container';
import { MobilePage } from './MobilePage/MobilePage';
import { MuxPageContainer } from './MuxPage/MuxPage.container';
import { NewBoardPageContainer } from './NewBoardPage/NewBoardPage.container';
import { NewReviewPageContainer } from './NewReviewPage/NewReviewPage.container';
import { PrivacyPolicyPageContainer } from './PrivacyPolicyPage/PrivacyPolicyPage.container';
import { ReportIssuePageContainer } from './ReportIssuePage/ReportIssuePage.container';
import { SettingsPageContainer } from './SettingsPage/SettingsPage.container';
import { TermsOfUsePageContainer } from './TermsOfUsePage/TermsOfUsePage.container';

export const pages = {
  mux: MuxPageContainer,
  map: MapPageContainer,
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
  capabilities: CapabilitiesPageContainer,
  flows: FlowsPageContainer,
  logs: LogsPageContainer,
  history: HistoryPageContainer,
  assets: AssetsPageContainer,
};
