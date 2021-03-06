# Simple Date - &lt;simple-date>&lt;/simple-date>
Simple Date is a custom HTML **date** element built using **Polymer** v0.5.1. It is backed by a small date validation library, javascript/datevalidation.js.

## Simple Date is easy to use:

Just add a simple-date to your markup.

    <simple-date></simple-date>

You can use attributes to configure and customize it:

    <simple-date id="sd" fontsize="3em" labeltext="Date" datecolor="#000"
    separatorcolor="#aaa" yearcolor="#00f" year="2014" monthcolor="#00f"  
    month="11" daycolor="#00f" day="28"></simple-date>

You can listen for and respond to datechanged events:

    <script>
    (function(){
        "use strict";
        var elemSimpleDate = document.getElementById("sd");
        /*
        Interfacing with custom elements is no different
        than interfacing with built-in html elements.
        */
        elemSimpleDate.addEventListener("datechanged", function(e){
            var elemDateInfo = document.getElementById("dateinfo"),
                str = "Date (id=\"" + elemSimpleDate.id + "\") ";
            str += e.detail.isValid ? "is valid." : "is not valid.";
            elemDateInfo.textContent = str;
        });
    }());
    </script>

## License:
MIT
