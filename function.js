//home search button, body background color chage
function searchButtonHome(self) {
    if (self.style.backgroundColor === 'transparent') {
    
        self.style.backgroundColor = '#d4d4d4';

        var target = document.querySelector('body');
        target.style.backgroundColor = '#d4d4d4';

        var target = document.getElementById('category_home');
        target.style.display = 'none';

        var target = document.getElementById('search_home');
        target.style.display = 'block';
    }
    
    else { 
        self.style.backgroundColor = 'transparent';

        var target = document.querySelector('body');
        target.style.backgroundColor = 'white';

        var target = document.getElementById('category_home');
        target.style.display = 'block';

        var target = document.getElementById('search_home');
        target.style.display = 'none';
    }
}

//other_page_search_button, chane to 'Search Category' from 'write'
function searchButton(self) {
    if (self.style.backgroundColor === 'transparent') {
    
        self.style.backgroundColor = 'white';

        var target = document.getElementById('category');
        target.style.display = 'none';

        var target = document.getElementById('search');
        target.style.display = 'block';

        var target = document.getElementById('write_btn');
        target.value = 'Search Category';
        target.style.width = '135px'
    }
    
    else { 
        self.style.backgroundColor = 'transparent';

        var target = document.getElementById('category');
        target.style.display = 'block';

        var target = document.getElementById('search');
        target.style.display = 'none';

        var target = document.getElementById('write_btn');
        target.value = 'Write';
        target.style.width = '100px'
    }
}