
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export const PointCalculator = () => {
  const [germanLanguage, setGermanLanguage] = useState("");
  const [englishLanguage, setEnglishLanguage] = useState("");
  const [qualification, setQualification] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [age, setAge] = useState("");
  const [euConnection, setEuConnection] = useState("no");
  const [shortageOccupation, setShortageOccupation] = useState("no");
  const [totalPoints, setTotalPoints] = useState(0);
  const [hasCalculated, setHasCalculated] = useState(false);

  const calculatePoints = () => {
    let points = 0;

    // German language
    if (germanLanguage === "A1" || germanLanguage === "A2") {
      points += 1;
    } else if (germanLanguage === "B1" || germanLanguage === "B2") {
      points += 2;
    } else if (germanLanguage === "C1" || germanLanguage === "C2") {
      points += 3;
    }

    // English language (only if not counting German)
    if (!germanLanguage && englishLanguage) {
      if (englishLanguage === "B1" || englishLanguage === "B2") {
        points += 1;
      } else if (englishLanguage === "C1" || englishLanguage === "C2") {
        points += 2;
      }
    }

    // Qualification
    if (qualification === "vocational") {
      points += 2;
    } else if (qualification === "university") {
      points += 3;
    }

    // Work experience
    if (workExperience === "3-5") {
      points += 1;
    } else if (workExperience === "5+") {
      points += 2;
    }

    // Shortage occupation
    if (shortageOccupation === "yes") {
      points += 1;
    }

    // Age
    if (age === "18-35") {
      points += 2;
    } else if (age === "36-40") {
      points += 1;
    }

    // EU connection
    if (euConnection === "yes") {
      points += 1;
    }

    setTotalPoints(points);
    setHasCalculated(true);
  };

  const resetCalculator = () => {
    setGermanLanguage("");
    setEnglishLanguage("");
    setQualification("");
    setWorkExperience("");
    setAge("");
    setEuConnection("no");
    setShortageOccupation("no");
    setTotalPoints(0);
    setHasCalculated(false);
  };

  return (
    <section id="calculator" className="py-16 bg-german-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Point Calculator
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Use this calculator to estimate your eligibility points for the German
            Opportunity Card. You need at least 6 points to qualify.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Opportunity Card Eligibility Calculator</CardTitle>
            <CardDescription>
              Fill in your details to calculate your points
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Language Skills */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Language Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="german">German Language Level</Label>
                  <Select value={germanLanguage} onValueChange={setGermanLanguage}>
                    <SelectTrigger id="german">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="A1">A1 (1 point)</SelectItem>
                      <SelectItem value="A2">A2 (1 point)</SelectItem>
                      <SelectItem value="B1">B1 (2 points)</SelectItem>
                      <SelectItem value="B2">B2 (2 points)</SelectItem>
                      <SelectItem value="C1">C1 (3 points)</SelectItem>
                      <SelectItem value="C2">C2 (3 points)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="english">English Language Level</Label>
                  <Select value={englishLanguage} onValueChange={setEnglishLanguage}>
                    <SelectTrigger id="english">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="B1">B1 (1 point)</SelectItem>
                      <SelectItem value="B2">B2 (1 point)</SelectItem>
                      <SelectItem value="C1">C1 (2 points)</SelectItem>
                      <SelectItem value="C2">C2 (2 points)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-1">
                    Note: Points for English only count if you don't have German skills
                  </p>
                </div>
              </div>
            </div>

            {/* Qualification */}
            <div className="space-y-2">
              <Label htmlFor="qualification">Highest Qualification</Label>
              <Select value={qualification} onValueChange={setQualification}>
                <SelectTrigger id="qualification">
                  <SelectValue placeholder="Select qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="vocational">
                    Vocational Training (2 points)
                  </SelectItem>
                  <SelectItem value="university">
                    University Degree (3 points)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Work Experience */}
            <div className="space-y-2">
              <Label htmlFor="experience">Work Experience</Label>
              <Select value={workExperience} onValueChange={setWorkExperience}>
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="less-than-3">Less than 3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years (1 point)</SelectItem>
                  <SelectItem value="5+">Over 5 years (2 points)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Shortage Occupation */}
            <div className="space-y-2">
              <h3 className="font-medium">Shortage Occupation</h3>
              <RadioGroup
                value={shortageOccupation}
                onValueChange={setShortageOccupation}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="shortage-yes" />
                  <Label htmlFor="shortage-yes">Yes (1 point)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="shortage-no" />
                  <Label htmlFor="shortage-no">No (0 points)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Select value={age} onValueChange={setAge}>
                <SelectTrigger id="age">
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-35">18-35 years (2 points)</SelectItem>
                  <SelectItem value="36-40">36-40 years (1 point)</SelectItem>
                  <SelectItem value="41+">Over 40 (0 points)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* EU Connection */}
            <div className="space-y-2">
              <h3 className="font-medium">Previous EU connection (study/work)</h3>
              <RadioGroup
                value={euConnection}
                onValueChange={setEuConnection}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="eu-yes" />
                  <Label htmlFor="eu-yes">Yes (1 point)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="eu-no" />
                  <Label htmlFor="eu-no">No (0 points)</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button
              variant="outline"
              onClick={resetCalculator}
              className="w-full sm:w-auto"
            >
              Reset
            </Button>
            <Button
              onClick={calculatePoints}
              className="w-full sm:w-auto bg-german-red hover:bg-red-700"
            >
              Calculate Points
            </Button>
          </CardFooter>
        </Card>

        {hasCalculated && (
          <div className="mt-8 max-w-2xl mx-auto">
            <Alert
              variant={totalPoints >= 6 ? "default" : "destructive"}
              className={
                totalPoints >= 6
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }
            >
              <div className="flex items-center gap-3">
                {totalPoints >= 6 ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600" />
                )}
                <div>
                  <AlertTitle className={totalPoints >= 6 ? "text-green-800" : "text-red-800"}>
                    {totalPoints >= 6
                      ? "Congratulations! You qualify"
                      : "Sorry, you don't qualify yet"}
                  </AlertTitle>
                  <AlertDescription className={totalPoints >= 6 ? "text-green-700" : "text-red-700"}>
                    Your total points: <strong>{totalPoints}</strong> out of 6 required points.
                  </AlertDescription>
                  {totalPoints < 6 && (
                    <p className="mt-2 text-red-700">
                      You need {6 - totalPoints} more point{6 - totalPoints !== 1 ? "s" : ""} to qualify.
                    </p>
                  )}
                </div>
              </div>
            </Alert>

            <div className="mt-6">
              <h4 className="font-medium text-lg mb-2">Next Steps:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {totalPoints >= 6 ? (
                  <>
                    <li>Prepare your application documents</li>
                    <li>Apply for the Opportunity Card at the German embassy</li>
                    <li>
                      Plan for your relocation to Germany (housing, insurance, etc.)
                    </li>
                  </>
                ) : (
                  <>
                    <li>Improve your language skills in German or English</li>
                    <li>Gain more work experience in your field</li>
                    <li>Consider pursuing further education or training</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
