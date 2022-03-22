/* eslint-disable no-undef */
/* eslint no-undef: "error" */

/**
 *
 * @returns allways return new id
 */
export const createUniqueID = () => new Date().getTime();

/**
 *
 * @param {string} id contains numbers and characters seperated with underscore
 * @returns id type
 */
export const checkIdType = (id) => id.split('_')[1];

/**
 *
 * @param {string} id contains numbers and characters seperated with underscore
 * @returns id number in string format
 */
export const getIdNumberFromId = (id) => id.split('_')[0];

/**
 *
 * @param {string} text the input to create html element with text
 * @param {string} id to create element with unique id
 * @returns one parent html element which has one text element and one button
 */
export const createComment = (text, id) => {
  const commentElement = document.createElement('div');
  commentElement.setAttribute('id', `${id}_comment_container`);
  commentElement.style.paddingLeft = '30px';

  // create element with text
  const commentText = document.createElement('p');
  commentText.innerText = text;
  commentText.setAttribute('id', `${id}`);
  commentElement.appendChild(commentText);

  // create add comment button
  const addCommentBtn = document.createElement('p');
  addCommentBtn.innerText = 'Add a reply';
  addCommentBtn.setAttribute('id', `${id}_add_comment_btn`);
  addCommentBtn.setAttribute('class', 'add_btn');
  commentElement.appendChild(addCommentBtn);

  return commentElement;
};

/**
 *
 * @param {string} id to create element with unique id
 * @returns one hmlt element which has textbox and submit button
 */
export const createCommentInput = (id) => {
  // parent element
  const commentInputContainer = document.createElement('div');
  commentInputContainer.setAttribute('id', `${id}_input_container`);
  commentInputContainer.style.paddingLeft = '30px';

  // create text input
  const commentInput = document.createElement('input');
  commentInput.setAttribute('type', 'text');
  commentInput.style.display = 'inline-block';
  commentInput.setAttribute('id', `${id}_input`);
  commentInputContainer.appendChild(commentInput);

  // create submit button
  const submitCommentBtn = document.createElement('button');
  submitCommentBtn.innerText = 'Submit';
  submitCommentBtn.style.display = 'inline-block';
  submitCommentBtn.setAttribute('id', `${id}_submit_comment_btn`);
  commentInputContainer.appendChild(submitCommentBtn);

  return commentInputContainer;
};

export const findInputAndFocus = (id) => {
  const inputElement = document.getElementById(`${id}_input`);
  inputElement.focus();
};
