import re

with open('items_raw.md', 'r') as f:
    contents = f.readlines()

parsable = ''.join(contents).split('#')
parsable = [x for x in parsable if x != '']

for r in parsable:
    title = r.split('\n')[0].lower().strip().replace(' ', '_').replace(',', '')
    header = f"""
    ---
    layout: default
    title: {title.replace('_', ' ')}
    nav_exclude: true
    ---

    """
    header = re.sub(r'    ', '', header)
    record = '#' + r
    with open(f'{title}.md', 'w') as f:
        f.writelines(header)
        f.writelines(record)
