// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        for (const user of json) {
            const myUser = document.createElement('div');
            myUser.setAttribute('class', 'user');
            document.body.appendChild(myUser);

            const myId = document.createElement('div');
            myId.setAttribute('class', 'id');
            myId.innerText = `id : ${user.id}`;
            myUser.appendChild(myId);

            const myUsername = document.createElement('div');
            myUsername.setAttribute('class', 'username');
            myUsername.innerText = `username : ${user.username}`;
            myUser.appendChild(myUsername);

            const postButton = document.createElement('div');
            postButton.setAttribute('class', 'postButton');
            document.body.appendChild(postButton);

            const myButton = document.createElement('button');
            myButton.innerText = `${user.username}'s posts`;
            postButton.appendChild(myButton);
            myButton.onclick = () => {
                myButton.remove();
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(json => {
                        for (const post of json) {
                            const myPost = document.createElement('div');
                            myPost.setAttribute('class', 'post');
                            postButton.appendChild(myPost);

                            const myPostUserId = document.createElement('div');
                            myPostUserId.setAttribute('class', 'postUserId');
                            myPostUserId.innerText = `userId : ${post.userId}`;
                            myPost.appendChild(myPostUserId);

                            const myPostId = document.createElement('div');
                            myPostId.setAttribute('class', 'postUserId');
                            myPostId.innerText = `id : ${post.id}`;
                            myPost.appendChild(myPostId);

                            const myPostTitle = document.createElement('div');
                            myPostTitle.setAttribute('class', 'postUserId');
                            myPostTitle.innerText = `title : ${post.title}`;
                            myPost.appendChild(myPostTitle);

                            const commentsButton = document.createElement('div');
                            commentsButton.setAttribute('class', 'postButton');
                            postButton.appendChild(commentsButton);

                            const myButton2 = document.createElement('button');
                            myButton2.innerText = 'comments';
                            commentsButton.appendChild(myButton2);
                            myButton2.onclick = () => {
                                myButton2.remove();
                                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                                    .then(response => response.json())
                                    .then(json => {
                                        for (const comment of json) {
                                            const myComment = document.createElement('comment');
                                            myComment.setAttribute('class', 'comment');
                                            commentsButton.appendChild(myComment);

                                            const myCommentPostId = document.createElement('div');
                                            myCommentPostId.setAttribute('class', 'commentPostId');
                                            myCommentPostId.innerText = `postId : ${comment.postId}`;
                                            myComment.appendChild(myCommentPostId);

                                            const myCommentId = document.createElement('div');
                                            myCommentId.setAttribute('class', 'commentId');
                                            myCommentId.innerText = `id : ${comment.id}`;
                                            myComment.appendChild(myCommentId);

                                            const myCommentName = document.createElement('div');
                                            myCommentName.setAttribute('class', 'commentName');
                                            myCommentName.innerText = `name : ${comment.name}`;
                                            myComment.appendChild(myCommentName);
                                        }
                                    })
                            }
                        }
                    })
            }
        }
    })


// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const main = document.createElement('div');
main.setAttribute('class', 'main');
document.body.appendChild(main);

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        for (const product of json.products) {
            const myProduct = document.createElement('div');
            myProduct.setAttribute('class', 'product');
            main.appendChild(myProduct);

            const myImage = document.createElement('img');
            myImage.setAttribute('class', 'image');
            myImage.setAttribute('src', `${product.images[0]}`);
            myProduct.appendChild(myImage);

            const myTitle = document.createElement('div');
            myTitle.setAttribute('class', 'title');
            myTitle.innerText = product.title;
            myProduct.appendChild(myTitle);

            const myPrice = document.createElement('div');
            myPrice.setAttribute('class', 'price');
            myPrice.innerText = product.price + '$';
            myProduct.appendChild(myPrice);

            const myCart = document.createElement('button');
            myCart.setAttribute('class', 'cart');
            myCart.innerText = 'Add to Cart';
            myProduct.appendChild(myCart);
            myCart.onclick = () => {
                const cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
    });

const div = document.createElement('div');
div.setAttribute('class', 'refDiv');
document.body.appendChild(div);
const ref = document.createElement('a');
ref.innerText = 'Go to Cart';
ref.setAttribute('href', './cart.html');
div.appendChild(ref);
