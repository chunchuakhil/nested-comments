/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint no-undef: "error" */

import {
  checkIdType,
  createComment,
  createCommentInput,
  createUniqueID,
  getIdNumberFromId,
} from './utils.js';

const commentsContainer = document.querySelector('.comments_container');

// defautl comment text
const defaultComment = 'Do you like this blog...?';
const commentElement = createComment(defaultComment, createUniqueID());

commentsContainer.appendChild(commentElement);

commentsContainer.addEventListener('click', (event) => {
  // parent element reference
  const parent = document.getElementById(event.target.id).parentElement;

  if (checkIdType(event.target.id) === 'add') {
    const inputContainer = createCommentInput(createUniqueID());
    parent.appendChild(inputContainer);
  } else if (checkIdType(event.target.id) === 'submit') {
    const id = getIdNumberFromId(event.target.id);
    const { value } = document.getElementById(`${id}_input`);
    const commentContainer = createComment(value, createUniqueID());
    parent.replaceWith(commentContainer);
  }
});
