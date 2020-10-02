// $('.btn-guide').click(function(event) {
//     event.preventDefault();
//     console.log($(this));
// });

// ***************************

// var guide = {
//     title: 'Guide to Programming',
//     content: 'Content goes here...',
//     visibleToUser: function (viewingUserRole) {
//       if (viewingUserRole === 'paid') {
//         return true;
//       }
//     },
//     renderContent: function(userRole) {
//       if (this.visibleToUser(userRole)) {
//         console.log(this.title + " - " + this.content);
//       } else {
//         this.content = '';
//         console.log(this.title + " - " + this.content);
//       }
//     }
//   }
  
//   user = { role: 'paid' };
//   guide.renderContent(user.role);


//   **************************************
//  Another version of above **********************
// class Guide {
//     constructor(title, content) {
//       this.title = title
//       this.content = content
//     }
//     visibleToUser(viewingUserRole) {
//       if (viewingUserRole === 'paid') {
//         return true;
//       }
//     }
    
//     renderContent(userRole) {
//       if (this.visibleToUser(userRole)) {
//         console.log(this.title + " - " + this.content);
//       } else {
//         this.content = '';
//         console.log(this.title + " - " + this.content);
//       }
//     }
//   }
//   let programming = new Guide('Guide to Programming', 'Content goes here...')
  
  
  
  console.log(programming.renderContent('paid'))


//   **********************************************************

var seats = {
    seats: 50,
    seatsSold: 28,
    remainingSeats: function(){
      return (this.seats - this.seatsSold)
      },
    enoughSeats: function(){
      if(this.remainingSeats() > 0){
        return this.remainingSeats()
      }
    }
  }
  
  
  seats.remainingSeats()