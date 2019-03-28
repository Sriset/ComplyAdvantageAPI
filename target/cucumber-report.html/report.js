$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Resources/ComplyAdvantageAPI.feature");
formatter.feature({
  "line": 1,
  "name": "As an automation test",
  "description": "        I want to add politician data via post API method and display politician data via get API method\n        so that API end points are verified successfully",
  "id": "as-an-automation-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Allows adding politicians data",
  "description": "",
  "id": "as-an-automation-test;allows-adding-politicians-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@AddPolitician"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I request ComplyAdvantage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I post adding politicians \"\u003cname\u003e\" \"\u003ccountry\u003e\" \"\u003cyearofbirth\u003e\" \"\u003cposition\u003e\" and \"\u003crisk\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get an OK response",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "as-an-automation-test;allows-adding-politicians-data;",
  "rows": [
    {
      "cells": [
        "name",
        "country",
        "yearofbirth",
        "position",
        "risk"
      ],
      "line": 12,
      "id": "as-an-automation-test;allows-adding-politicians-data;;1"
    },
    {
      "cells": [
        "Barry Gardner",
        "UK",
        "09/25/1973",
        "MP",
        "5"
      ],
      "line": 13,
      "id": "as-an-automation-test;allows-adding-politicians-data;;2"
    },
    {
      "cells": [
        "Alex McGraill",
        "UK",
        "03/23/1965",
        "MP",
        "2"
      ],
      "line": 14,
      "id": "as-an-automation-test;allows-adding-politicians-data;;3"
    },
    {
      "cells": [
        "Chris Thompson",
        "UK",
        "11/25/1953",
        "MP",
        "1"
      ],
      "line": 15,
      "id": "as-an-automation-test;allows-adding-politicians-data;;4"
    },
    {
      "cells": [
        "Elizabeth Evans",
        "UK",
        "12/30/1978",
        "MP",
        "3"
      ],
      "line": 16,
      "id": "as-an-automation-test;allows-adding-politicians-data;;5"
    },
    {
      "cells": [
        "Jordan Jaamie",
        "UK",
        "11/25/1953",
        "MP",
        "4"
      ],
      "line": 17,
      "id": "as-an-automation-test;allows-adding-politicians-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Allows adding politicians data",
  "description": "",
  "id": "as-an-automation-test;allows-adding-politicians-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@AddPolitician"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I request ComplyAdvantage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I post adding politicians \"Barry Gardner\" \"UK\" \"09/25/1973\" \"MP\" and \"5\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get an OK response",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.i_request_ComplyAdvantage()"
});
formatter.result({
  "duration": 373345883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Barry Gardner",
      "offset": 27
    },
    {
      "val": "UK",
      "offset": 43
    },
    {
      "val": "09/25/1973",
      "offset": 48
    },
    {
      "val": "MP",
      "offset": 61
    },
    {
      "val": "5",
      "offset": 70
    }
  ],
  "location": "MyStepdefs.i_post_adding_politicians_and(String,String,String,String,int)"
});
formatter.result({
  "duration": 14090166646,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_get_an_OK_response()"
});
formatter.result({
  "duration": 21512121,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Allows adding politicians data",
  "description": "",
  "id": "as-an-automation-test;allows-adding-politicians-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@AddPolitician"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I request ComplyAdvantage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I post adding politicians \"Alex McGraill\" \"UK\" \"03/23/1965\" \"MP\" and \"2\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get an OK response",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.i_request_ComplyAdvantage()"
});
formatter.result({
  "duration": 41658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alex McGraill",
      "offset": 27
    },
    {
      "val": "UK",
      "offset": 43
    },
    {
      "val": "03/23/1965",
      "offset": 48
    },
    {
      "val": "MP",
      "offset": 61
    },
    {
      "val": "2",
      "offset": 70
    }
  ],
  "location": "MyStepdefs.i_post_adding_politicians_and(String,String,String,String,int)"
});
formatter.result({
  "duration": 157498965,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_get_an_OK_response()"
});
formatter.result({
  "duration": 26029963,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Allows adding politicians data",
  "description": "",
  "id": "as-an-automation-test;allows-adding-politicians-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@AddPolitician"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I request ComplyAdvantage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I post adding politicians \"Chris Thompson\" \"UK\" \"11/25/1953\" \"MP\" and \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get an OK response",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.i_request_ComplyAdvantage()"
});
formatter.result({
  "duration": 50714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Thompson",
      "offset": 27
    },
    {
      "val": "UK",
      "offset": 44
    },
    {
      "val": "11/25/1953",
      "offset": 49
    },
    {
      "val": "MP",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 71
    }
  ],
  "location": "MyStepdefs.i_post_adding_politicians_and(String,String,String,String,int)"
});
formatter.result({
  "duration": 138936753,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_get_an_OK_response()"
});
formatter.result({
  "duration": 16150242,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Allows adding politicians data",
  "description": "",
  "id": "as-an-automation-test;allows-adding-politicians-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@AddPolitician"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I request ComplyAdvantage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I post adding politicians \"Elizabeth Evans\" \"UK\" \"12/30/1978\" \"MP\" and \"3\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get an OK response",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.i_request_ComplyAdvantage()"
});
formatter.result({
  "duration": 60978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elizabeth Evans",
      "offset": 27
    },
    {
      "val": "UK",
      "offset": 45
    },
    {
      "val": "12/30/1978",
      "offset": 50
    },
    {
      "val": "MP",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 72
    }
  ],
  "location": "MyStepdefs.i_post_adding_politicians_and(String,String,String,String,int)"
});
formatter.result({
  "duration": 155150387,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_get_an_OK_response()"
});
formatter.result({
  "duration": 40490919,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Allows adding politicians data",
  "description": "",
  "id": "as-an-automation-test;allows-adding-politicians-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@AddPolitician"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I request ComplyAdvantage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I post adding politicians \"Jordan Jaamie\" \"UK\" \"11/25/1953\" \"MP\" and \"4\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get an OK response",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.i_request_ComplyAdvantage()"
});
formatter.result({
  "duration": 77883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jordan Jaamie",
      "offset": 27
    },
    {
      "val": "UK",
      "offset": 43
    },
    {
      "val": "11/25/1953",
      "offset": 48
    },
    {
      "val": "MP",
      "offset": 61
    },
    {
      "val": "4",
      "offset": 70
    }
  ],
  "location": "MyStepdefs.i_post_adding_politicians_and(String,String,String,String,int)"
});
formatter.result({
  "duration": 161140769,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_get_an_OK_response()"
});
formatter.result({
  "duration": 21259151,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Returns the list of the latest 5 politicians, order by date of creation",
  "description": "",
  "id": "as-an-automation-test;returns-the-list-of-the-latest-5-politicians,-order-by-date-of-creation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@ReturnLatestListof5Politician"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I request ComplyAdvantage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I request get method for endpoint \"http://ec2-34-251-162-89.eu-west-1.compute.amazonaws.com/peps\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I get response as list of the latest 5 politicians, order by date of creation",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.i_request_ComplyAdvantage()"
});
formatter.result({
  "duration": 54941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://ec2-34-251-162-89.eu-west-1.compute.amazonaws.com/peps",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.i_request_get_method_for_endpoint(String)"
});
formatter.result({
  "duration": 236469116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 37
    }
  ],
  "location": "MyStepdefs.i_get_response_as_list_of_the_latest_politicians_order_by_date_of_creation(int)"
});
formatter.result({
  "duration": 36276159,
  "status": "passed"
});
});