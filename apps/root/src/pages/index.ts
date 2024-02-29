import { AccountPageContainer } from '../groups/AccountPage/AccountPage.container';
import { CapabilitiesPageContainer } from '../groups/CapabilitiesPage/CapabilitiesPage.container';
import { MuxPageContainer } from '../groups/MuxPage/MuxPage.container';
import { AssetsPageContainer } from './AssetsPage/AssetsPage.container';
import { BrowsePageContainer } from './BrowsePage/BrowsePage.container';
import { DocsPageContainer } from './DocsPage/DocsPage.container';
import { FlowsPageContainer } from './FlowsPage/FlowsPage.container';
import { HistoryPageContainer } from './HistoryPage/HistoryPage.container';
import { LogsPageContainer } from './LogsPage/LogsPage.container';
import { MapPageContainer } from './MapPage/MapPage.container';
import { MobilePage } from './MobilePage/MobilePage';
import { NewBoardPageContainer } from './NewBoardPage/NewBoardPage.container';
import { NewReviewPageContainer } from './NewReviewPage/NewReviewPage.container';
import { PrivacyPolicyPageContainer } from './PrivacyPolicyPage/PrivacyPolicyPage.container';
import { ReportIssuePageContainer } from './ReportIssuePage/ReportIssuePage.container';
import { TermsOfUsePageContainer } from './TermsOfUsePage/TermsOfUsePage.container';

export const pages = {
  // groups
  mux: MuxPageContainer,
  capabilities: CapabilitiesPageContainer,
  account: AccountPageContainer,
  // pages
  map: MapPageContainer,
  browse: BrowsePageContainer,
  newBoard: NewBoardPageContainer,
  newReview: NewReviewPageContainer,
  docs: DocsPageContainer,
  mobile: MobilePage,
  reportIssue: ReportIssuePageContainer,
  termsOfUse: TermsOfUsePageContainer,
  privacyPolicy: PrivacyPolicyPageContainer,
  flows: FlowsPageContainer,
  logs: LogsPageContainer,
  history: HistoryPageContainer,
  assets: AssetsPageContainer,
};
