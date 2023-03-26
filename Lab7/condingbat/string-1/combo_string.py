def combo_string(a, b):
    shorter = min(len(a), len(b))
    longer = max(len(a), len(b))
    return shorter + longer + shorter