define([],
    function() {

       function AppUtil() {
         const self = this;

         self.someFunction = () => {
             alert('Called function in another file')
         }

       }

       return new AppUtil();
     }
   );
