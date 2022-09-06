const getProjects = () => {
    $.get('/api/projects',(response) => {
        if(response.statusCode==200){
            addCards(response.data);
        }
    })
}

//ajax function to add project
const addProjectToApp = (project) => {
    $.ajax({
        url: '/api/projects',
        data: project,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload(); // it automatically reloads the page 
        }
    })
}



const cardList = [
    {
        title: "Harry Potter and  the Deathly Hallows",
        image: "images/harrypotterdeathleyhallows.jpg",
        link: "click for more",
        description: "Harry Potter And The Deathly Hallows Hardcover 1st Edition Australian JKRowling.  In good used condition. Dust jacket has some creasing to the top and bottom edges. The hardcover has some creasing to the top and bottom of the spine. Other than the minor creasing it's in good condition.",
    },

    {
        title: "Bill and Ben the Flowerpot Men",
        image: "images/billandbenbook.jpg",
        link: "click for more",
        description: "This was an adorable children's story. Another one found on a shelf while staying with friends. I’m younger than the Bill and Ben era so a bit of a new find",
    },

    {
        title: "The Hobbit: Deluxe Edition Hardcover",
        image: "images/thehobbitdelux.jpg",
        link: "click for more",
        description: "This deluxe slipcased edition of The Hobbit, printed and bound using superior materials including a silk ribbon marker, features the definitive text, plus Tolkien’s paintings and drawings in full colour, and a special fold-out version of Thror’s Map. Bilbo Baggins enjoys a quiet and contented life, with no desire to travel far from the comforts of home; then one day the wizard Gandalf and a band of dwarves arrive unexpectedly and enlist his services – as a burglar – on a dangerous expedition to raid the treasure-hoard of Smaug the dragon. Bilbo’s life is never to be the same again.",
    },

]

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'</span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'</span>'+
        '<p class="card-text card-desc-color">'+item.description+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}


const submitUserForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
    addProjectToApp(formData);
}


const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.description = $('#description').val();

    console.log("Form Data Submitted: ", formData);
    addProjectToApp(formData);
}


$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit2').click(()=>{
        submitForm();
    })
    //addCards(cardList);
    getProjects();
    $('.modal').modal();
  });


  $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitUserForm();
    })
  });

