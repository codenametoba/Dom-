document.addEventListener('DOMContentLoaded', () => {

    const plusButton = document.querySelector('#plus');
    const minusButton = document.querySelector('#minus');
    const amount = document.querySelector('#amount');
    const price = document.querySelector('#price');
    const removeButton = document.querySelector('#remove');
    const likeButton = document.querySelector('#like');
    const removeSButton = document.querySelector('removeS');
    const likeSButton = document.querySelector('likeS')
    const subtotal = document.querySelector('#subtotal input');
    // Event Listeners
    plusButton.addEventListener('click', () => {
      amount.textContent = parseInt(amount.textContent) + 1;
      subtotal.value = (parseFloat(price.textContent.substring(1)) * parseInt(amount.textContent)).toFixed(2);
    });

    minusButton.addEventListener('click', () => {
      if (parseInt(amount.textContent) > 0) {
        amount.textContent = parseInt(amount.textContent) - 1;
        subtotal.value = (parseFloat(price.textContent.substring(1)) * parseInt(amount.textContent)).toFixed(2);
      }
    });

    like.addEventListener('click', () => {
        like.classList.toggle('like-color')
        like.textContent = 'Like 👍'
    })

    removeS.addEventListener('click', () => {
        const elementS = document.getElementById("myElementS");
        elementS.classList.add("hidden");
    })

    likeS.addEventListener('click', () => {
        likeS.classList.toggle('like-color')
        likeS.textContent = 'Like 👍'
    })
    remove.addEventListener('click', () => {
        const element = document.getElementById("myElement");
        element.classList.add("hidden");
    })

    // Constants for second item
    const plusButtonS = document.querySelector('#plus-s');
    const minusButtonS = document.querySelector('#minus-s');
    const amountS = document.querySelector('#amount-s');
    const priceS = document.querySelector('#price-s');
    const removeButtonS = document.querySelector('#remove-s');
    const likeButtonS = document.querySelector('#like-s');
    const subtotalS = document.querySelector('#subtotal input');

    // Event Listeners for second item
    plusButtonS.addEventListener('click', () => {
      amountS.textContent = parseInt(amountS.textContent) + 1;
      subtotalS.value = (parseFloat(priceS.textContent.substring(1)) * parseInt(amountS.textContent)).toFixed(2);
    });

    minusButtonS.addEventListener('click', () => {
      if (parseInt(amountS.textContent) > 0) {
        amountS.textContent = parseInt(amountS.textContent) - 1;
        subtotalS.value = (parseFloat(priceS.textContent.substring(1)) * parseInt(amountS.textContent)).toFixed(2);
      }
    });

    removeButtonS.addEventListener('click', () => {
      amountS.textContent = 0;
      subtotalS.value = 0;
    });

    likeButtonS.addEventListener('click', () => {
      alert('Item Liked!');
    });
  });
