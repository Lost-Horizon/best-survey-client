curl "http://localhost:4741/surveys/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "question": "'"${Q}"'"
    }
  }'

echo
