### Storybook & React
# Create application:
npx create-react-app appname
cd appname

# Add Storybook:
npx -p @storybook/cli sb init
# Run the test runner (Jest) in a terminal:
yarn test

# Start the component explorer on port 9009:
yarn run storybook

# Run the frontend app proper on port 3000:
yarn start