/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['knockout', 'ojs/ojarraydataprovider', "axios", 'ojs/ojpictochart'],
 function(ko, ArrayDataProvider, Axios) {

    function AboutViewModel() {
      var self = this;
      self.data = ko.observableArray([])
      self.dataProvider = ko.observable(new ArrayDataProvider(self.data, {keyAttributes: 'name'}));


      self.getColor = function(index){
        return index === 0? '#ed6647' : '';
      }


      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        Axios.get("http://localhost:8000/js/data/mydata.json").then((result) => {
          self.data(result.data)
        })
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new AboutViewModel();
  }
);
