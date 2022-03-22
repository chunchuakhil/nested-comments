export const createComment = (text, id) => {
  const commentElement = document.createElement('div');
  commentElement.setAttribute('id', `${id}_comment_container`);
  const commentText = document.createElement('p');
  commentText.innerText = text;
  commentText.setAttribute('id', `${id}`);
  commentElement.appendChild(commentText);
  // create add comment button
  const addComment_btn = document.createElement('button');
  addComment_btn.innerText = 'Add a reply';
  addComment_btn.setAttribute('id', `${id}_add_comment_btn`);
  // padding for parent
  commentElement.style.paddingLeft = '30px';
  commentElement.appendChild(addComment_btn);
  return commentElement;
};

export const createCommentInput = (id) => {
  // parent div
  const commentInputContainer = document.createElement('div');
  commentInputContainer.setAttribute('id', `${id}_input_container`);
  commentInputContainer.style.paddingLeft = '30px';
  // input box
  var commentInput = document.createElement('input');
  commentInput.setAttribute('type', 'text');
  commentInput.style.display = 'inline-block';
  commentInput.setAttribute('id', `${id}_input`);

  commentInputContainer.appendChild(commentInput);
  // create submit button
  const submitComment_btn = document.createElement('button');
  submitComment_btn.innerText = 'Submit';
  submitComment_btn.style.display = 'inline-block';
  submitComment_btn.setAttribute('id', `${id}_submit_comment_btn`);
  commentInputContainer.appendChild(submitComment_btn);

  return commentInputContainer;
};

export const getCommentText = (event) => {
  const id = event.target.id.split('_')[0];
  const inputElement = document.getElementById(`${id}_input`);

  return inputElement.value;
};
