pbjs -t json --no-beautify -p ./src/proto -o ./src/proto.generated/index.json ./src/proto/message.proto

mkdir -p ./dist/proto.generated
cp -f ./src/proto.generated/index.json ./dist/proto.generated/index.json

pbjs --no-beautify -t static-module -p ./src/proto -o ./src/proto.generated/index.js -w es6 ./src/proto/message.proto
pbts --no-comments -o ./src/proto.generated/index.d.ts ./src/proto.generated/index.js
echo "declare const schema: $(cat ./src/proto.generated/index.json); export default schema;" > ./src/proto.generated/index.json.d.ts

cp -f ./src/proto.generated/index.d.ts ./dist/proto.generated/index.d.ts
cp -f ./src/proto.generated/index.json.d.ts ./dist/proto.generated/index.json.d.ts

rm ./src/proto.generated/index.js
pbjs --no-comments -t static-module --no-comment -p ./src/proto -o ./src/proto.generated/index.js -w es6 ./src/proto/message.proto

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  sed -i "s/import \* as \$protobuf/import \$protobuf/g" ./src/proto.generated/index.js
else
  gsed -i "s/import \* as \$protobuf/import \$protobuf/g" ./src/proto.generated/index.js
fi
