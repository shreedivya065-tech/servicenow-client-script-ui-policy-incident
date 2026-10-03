function onLoad() {
    var priority = g_form.getValue('priority');
    if (priority == '1') {
        g_form.addInfoMessage('This is a Critical (P1) incident. Please update it frequently.');
    }
}
