function convertToJson() {
    const yamlInput = $('#yamlOutput').val();
    if (yamlInput == null || yamlInput === '') {
        return
    }
    const jsonObject = jsyaml.load(yamlInput);
    $('#jsonInput').val(JSON.stringify(jsonObject, null, 2));
}

function convertToYaml() {
    const jsonInput = $('#jsonInput').val();
    if (jsonInput == null || jsonInput === '') {
        return
    }
    const yamlObject = jsyaml.dump(JSON.parse(jsonInput));
    $('#yamlOutput').val(yamlObject);
}