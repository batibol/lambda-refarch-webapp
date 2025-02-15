// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4098h6od45mfpv5usrj1pbigrv",     // CognitoClientID
  "api_base_url": "https://uhoeog4sec.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-bis.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.dav439xmmurp.amplifyapp.com"                                      // AmplifyURL
};

export default config;
