import refs from './refs';
export default evt => {
  if (evt.currentTarget.classList.contains('content__btn-more')) {
    if (refs.abouMoreContent.classList.contains('moreContentIsHiden')) {
      refs.abouMoreContent.classList.remove('moreContentIsHiden');
      refs.aboutButton.textContent = 'Less';
      return;
    }
    refs.abouMoreContent.classList.add('moreContentIsHiden');
    refs.aboutButton.textContent = 'Read more';
  }
  if (evt.currentTarget.classList.contains('program__button')) {
    if (refs.programMoreContent.classList.contains('program__more--hidden')) {
      refs.programMoreContent.classList.remove('program__more--hidden');
      refs.programButton.textContent = 'Less';
      return;
    }
    refs.programMoreContent.classList.add('program__more--hidden');
    refs.programButton.textContent = 'Read more';
  }
};
