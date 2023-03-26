def make_tags(tag, text):
    open_tag = "<" + tag + ">"
    close_tag = "</" + tag + ">"
    return open_tag + text + close_tag