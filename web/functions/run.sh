# curl -X POST \
#   -H "Content-Type: application/json" \
#   -d '{"prompt": "a song about marriage"}' \
#   https://us-central1-usegdi-a56c4.cloudfunctions.net/api/ai/chat

# curl -X POST \
#   -H "Content-Type: application/json" \
#   -d '{"prompt": "3 students talking in the park, photo realistic, volumetric light"}' \
#   https://us-central1-usegdi-a56c4.cloudfunctions.net/api/ai/image

curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"}' \
  https://us-central1-usegdi-a56c4.cloudfunctions.net/api/ai/vision

# curl -X POST \
#   -H "Content-Type: application/json" \
#   -d '{"prompt": "Today is a wonderful day to build something people love!"}' \
#   https://us-central1-usegdi-a56c4.cloudfunctions.net/api/ai/speech

# curl -X POST \
#   -H "Content-Type: application/json" \
#   -d '{"openAI": "123"}' \
#   https://us-central1-usegdi-a56c4.cloudfunctions.net/api/account/keys
