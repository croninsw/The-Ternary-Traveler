const interestForm = ( ) => {
    return `
        <section>
            <input type="hidden" value="${interestId}"><br>
            <fieldset>
                <label for="interest__name">Name of Interest: </label>
                <input type="text" name="interest__name" placeholder="name"><br>
            </fieldset>
            <fieldset>
                <label for="interest__description">Description of Interest: </label>
                <input type="text" name="interest__description" placeholder="description"><br>
            </fieldset>
            <fieldset>
                <label for="interest__location">Location of Interest: </label>
                <select id="location__selection"></select>
            </fieldset>
        </section>
    `
}