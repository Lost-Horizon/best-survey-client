curl "http://localhost:4741/surveys" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "question": "'"${Q}"'"
    }
  }'

echo
