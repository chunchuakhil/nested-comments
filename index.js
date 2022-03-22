import { createComment, createCommentInput, getCommentText } from './utils.js';

const commentsContainer = document.querySelector('.comments_container');
// Default comment element
const commentElement = createComment(
  'Do you like this blog...?',
  new Date().getTime()
);
commentsContainer.appendChild(commentElement);

commentsContainer.addEventListener('click', (event) => {
  // always have reference to parent element
  const parent = document.getElementById(event.target.id).parentElement;
  if (event.target.id.split('_')[1] === 'add') {
    // first create a div with input, submit button and add to parent
    const inputContainer = createCommentInput(new Date().getTime());
    // append to parent
    parent.appendChild(inputContainer);
  } else if (event.target.id.split('_')[1] === 'submit') {
    // if on click submit get value from input and replace input with comment container
    const commentText = getCommentText(event);
    const commentContainer = createComment(commentText, new Date().getTime());
    parent.replaceWith(commentContainer);
  }
});
