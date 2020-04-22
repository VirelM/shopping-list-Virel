function page (){
    $('#js-shopping-list-form').submit(event =>{
        event.preventDefault();
        const addedItem = $(event.currentTarget).find('#shopping-list-entry').val();
        
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">` + addedItem + `</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
            </li>`
          );
    })
}

function classToggle() {
    $('.shopping-item-toggle').on('click', event => {
        const checked = $(event.currentTarget);
        checked.toggleClass('shopping-item__checked');
    });
}

function deleteItem(){
    $('div').on('click', '.shopping-item-delete', function(event) {
        this.closest('li').remove();
      });
}

$(page);
$(classToggle);
$(deleteItem);