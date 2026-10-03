function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    if (newValue == '1') {
        g_form.showFieldMsg('impact', 'High impact selected. Ensure Assignment group is filled.', 'info');
    } else {
        g_form.hideFieldMsg('impact', true);
    }
}
