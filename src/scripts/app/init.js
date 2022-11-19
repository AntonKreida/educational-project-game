import './model/window';
import viewIndex from './view/index-page';
import viewHandlersPage from './view/view';

window.addEventListener('DOMContentLoaded', () => {
  window.globalStateApp.status = 'lobby';
  viewIndex.getTemplate();
  viewHandlersPage.lobbyForm();
});
