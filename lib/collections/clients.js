// lib/collections/posts.js

Clients = new Mongo.Collection("clients");
Clients.attachSchema(new SimpleSchema({
  company: {
    type: String,
    label: "Company Name",
    max: 200
  },
  firstName: {
    type: String,
    label: "First Name"
  },
  lastName: {
    type: String,
    label: "Last Name"
  },
  address: {
    type: String,
    label: "Address",
  },
  city: {
    type: String,
    label: "City"
  },
    phonenumber: {
    type: String,
    label: 'Phone'
    },
    country: {
        optional: true,
        type: String,
        label: "Country",
        autoform: {
          afFieldInput: {
            options: function () { return {
              canada: 'Canada',
              USA: 'USA',
              mexico: 'Mexico',
            } }
          }
        }
    },
    province: {
    type: String,
    label: 'Province',
    allowedValues: ["QC","ON","AL","MA"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select a State)"
      }
    }
    },
    zipCode: {
    type: String,
    label: 'Postal Code'   
    }
}));