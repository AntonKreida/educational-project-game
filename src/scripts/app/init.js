import './model/window';
import viewHandlersPage from './view/view';

window.addEventListener('DOMContentLoaded', () => {
  window.globalStateApp.status = 'lobby';
  viewHandlersPage.lobbyForm();
});
