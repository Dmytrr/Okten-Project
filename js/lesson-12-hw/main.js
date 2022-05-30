// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => showPosts(json, 0))

function showPosts(posts, count) {
    if (count >= posts.length) return;
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    document.body.appendChild(row);
    for (let i = 0; i < 5; i++) {
        const post = document.createElement('div');
        post.setAttribute('class', 'post');
        row.appendChild(post);

        const myUserId = document.createElement('div');
        myUserId.setAttribute('class', 'userId');
        myUserId.innerText = posts[count + i].userId;
        post.appendChild(myUserId);

        const myId = document.createElement('div');
        myId.setAttribute('class', 'id');
        myId.innerText = posts[count + i].id;
        post.appendChild(myId);

        const myTitle = document.createElement('div');
        myTitle.setAttribute('class', 'title');
        myTitle.innerText = posts[count + i].title;
        post.appendChild(myTitle);

        const myBody = document.createElement('div');
        myBody.setAttribute('class', 'title');
        myBody.innerText = posts[count + i].body;
        post.appendChild(myBody);
    }
    showPosts(posts, count + 5);
}

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments