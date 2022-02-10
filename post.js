// add button event listener
document.getElementById('post-btn').addEventListener('click',function(){
    const commentBox = document.getElementById('input-filed');
    // get user comments
    const userComment = commentBox.value;
    //set commment box value null after post the content
    commentBox.value = '';
    // create an html element
    const p = document.createElement('p');
    p.innerText = userComment;
    // append with parent
    const blogItem = document.getElementById('blog');
    blogItem.appendChild(p);
})

// title css using by JS
const h1Title = document.getElementById('title');
h1Title.style.textAlign = 'center';
h1Title.style.backgroundColor = 'lightblue';
h1Title.style.padding = '10px';
h1Title.style.borderRadius = '15px';

const blogs = document.getElementById('blog');
blogs.style.margin = '10px';
blogs.style.padding = '5px 15px';
blogs.style.backgroundColor = '#FCF5F5';
blogs.style.borderRadius = '15px';
blogs.style.color = 'black';

// comment container css using by JS
const commentContainer = document.getElementById('comment-container');
commentContainer.style.margin = '10px';
commentContainer.style.padding = '5px';
// textarea css using by JS
const inputFiled = document.getElementById('input-filed');
inputFiled.innerText = '';
inputFiled.style.border = '1px solid lightblue';
inputFiled.style.borderRadius = '10px';
inputFiled.style.padding = '5px';
// btn css using by JS
const postBtn = document.getElementById('post-btn');
postBtn.style.backgroundColor = 'lightblue';
postBtn.style.fontWeight = '700';
postBtn.style.fontSize = '16px';
postBtn.style.border = 'none';
postBtn.style.borderRadius = '10px';
postBtn.style.color = 'darkslateblue';
postBtn.style.marginTop = '10px';
postBtn.style.padding = '8px 30px';

