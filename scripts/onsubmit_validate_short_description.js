function onSubmit() {
    var shortDesc = g_form.getValue('short_description').trim();
    if (shortDesc.length < 10) {
        g_form.showFieldMsg('short_description', 'Short description must be at least 10 characters.', 'error');
        return false;
    }
    return true;
}
