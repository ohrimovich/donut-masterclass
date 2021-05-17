import refs from './refs';
export default () => {
  if (refs.moreContent.classList.contains('moreContent')) {
    refs.moreContent.classList.remove('moreContent');
    refs.actionButton.textContent = 'Less';
    return;
  }
  refs.moreContent.classList.add('moreContent');
  refs.actionButton.textContent = 'Read more';
};
