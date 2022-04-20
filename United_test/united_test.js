module.exports = {
    "Homework test": browser => {    // Please use Chromedriver

        const OneWay = '#bookFlightForm > div.app-components-BookFlightForm-bookFlightForm__formHeader--2Hpvk > fieldset > div > label:nth-child(2) > span:nth-child(1)';
        const AutoFill = '#bookFlightOriginInput';
        const AutoFillNewYork = '#autocomplete-item-1 > button';
        const AutoFillTwo = '#bookFlightDestinationInput';
        const AutoFillMiami = '#autocomplete-item-0 > button';
        const DateField = '#DepartDate';
        const DeleteDate = '#passengersSlidingInputContainer > div.app-components-BookFlightForm-bookFlightForm__bookCalendar--1f4qZ > div > button';
        const FromField = '#bookFlightOriginInput';
        const FindFlights = '#bookFlightForm > div.app-components-BookFlightForm-bookFlightForm__basicEconomyToggle--1VE5O > div > div:nth-child(1) > div > div > button';
        const From = 'New York';
        const SortButton = '#app > div > div > div > div.page > div.relativePosition > div > div.app-containers-Shopping-FlightSearchResultsContainer-styles__flightSearchResultContainer--2BFw0 > div > div:nth-child(4) > div:nth-child(1) > div > div.app-components-Shopping-SortFilterSection-styles__filterContainer--2X5av > div.app-components-Shopping-SortFilterSection-styles__buttonContainer--3DAnE.app-components-Shopping-SortFilterSection-styles__mobileContainer--2LG35 > section > div > div > div > div > button';
        const ToField = '#bookFlightDestinationInput';
        const To = 'Miami';
        const DateSelector = '#DepartDate';
        const Date = 'Aug 20';
        const ClassSelector = '#cabinType';
        const Class = 'Economy';
        const Sort = 'body > div:nth-child(28) > div > div:nth-child(3) > article > div.atm-c-popupmodal_body.app-components-Shopping-ResultSortFilter-styles__body--1vZJA > div > div.app-components-Shopping-ResultSortFilter-styles__content--k5BA1 > div.app-components-Shopping-ResultSortFilter-styles__prices--1OEbE > div > div';
        const BasicEco = '<option value="ECONOMY">Best price: Economy </option>';
        const Info = '#flightResults-content > div.app-components-Shopping-ResultGrid-styles__flightsContainer--3sApV > div:nth-child(1) > div > div:nth-child(1) > div.app-components-Shopping-FlightBaseCard-styles__flightBaseCardContainer--3unlI > div';

        browser
        .url("https://www.united.com/en/us")
        .click(OneWay)
        .setValue(FromField, From)
        .waitForElementVisible(AutoFill)
        .click(AutoFill)
        .waitForElementVisible(AutoFillNewYork, 10000)
        .click(AutoFillNewYork)
        .setValue(ToField, To)
        .click(AutoFillTwo)
        .waitForElementVisible(AutoFillMiami, 10000)
        .click(AutoFillMiami)
        .click(DateField)
        .click(DateSelector)
        .click(DeleteDate)
        .setValue(DateSelector, Date)
        .click(DateSelector)
        .click(FindFlights)
        .waitForElementVisible(SortButton,10000)
        //.click(SortButton)                       // Commented this step out, because XPath, Element and Selector is
        //.setValue(Sort, BasicEco)                    consistently changing.

       browser.getText(Info, function(result) {
                console.log('getText result', result.value);
                const fs = require('fs');
                let jsonData = JSON.stringify(result);
                fs.writeFile('FlightList.json', jsonData,    // Required JSON file will be created automatically
                    {
                        encoding: 'utf-8',
                        flag: 'w',
                        mode: 0o666
                    },
                    (err) => {
                        if (err)
                          console.log(err);
                        else {
                          console.log("File written successfully\n");
                          console.log("The written has the following contents:");
                          console.log(fs.readFileSync("FlightList.json", "utf8"));
                        }
                    });

                });


    }
}
