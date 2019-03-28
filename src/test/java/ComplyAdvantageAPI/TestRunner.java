package ComplyAdvantageAPI;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = ".",
        plugin = {"pretty:target/cucumber-pretty.txt",
                "html:target/cucumber-report.html"},
        tags = {}
)
public class TestRunner {

}
