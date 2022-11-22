
// Dont Work index.html
function searchButtonHome(self) {
    if (self.style.backgroundColor === 'white') {
    
        self.style.backgroundColor = 'transparent';

        var target = document.querySelector('body');
        target.style.backgroundColor = '#d4d4d4';

        var target = document.getElementById('dropdown');
        target.style.display = 'none';

        var target = document.getElementById('gsearch_home');
        target.style.display = 'block';
    }
    
    else { 
        self.style.backgroundColor = 'white';

        var target = document.querySelector('body');
        target.style.backgroundColor = 'white';

        var target = document.getElementById('dropdown');
        target.style.display = 'block';

        var target = document.getElementById('gsearch_home');
        target.style.display = 'none';
    }
}


function searchButton(self) {
    if (self.style.backgroundColor === 'white') {
    
        self.style.backgroundColor = 'transparent';

        var target = document.getElementById('dropdown');
        target.style.display = 'none';

        var target = document.getElementById('gsearch');
        target.style.display = 'block';

        var target = document.getElementById('write_btn');
        target.value = 'Search Category';
        target.style.width = '135px'
    }
    
    else { 
        self.style.backgroundColor = 'white';

        var target = document.getElementById('dropdown');
        target.style.display = 'block';

        var target = document.getElementById('gsearch');
        target.style.display = 'none';

        var target = document.getElementById('write_btn');
        target.value = 'Write';
        target.style.width = '100px'
    }
}