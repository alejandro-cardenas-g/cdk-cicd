import * as cdk from "aws-cdk-lib";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, "MyPipeline", {
      pipelineName: "myPipeline",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub(
          "alejandro-cardenas-g/cdk-cicd",
          "main"
        ),
        commands: ["npm ci", "npx cdk synth"],
        primaryOutputDirectory: "cdk.out",
      }),
    });
  }
}
