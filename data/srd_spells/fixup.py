import os
import pathlib

inputs = os.listdir()
inputs.sort()

spell_list = [
    'Acid Splash',
    'Aid',
    'Antimagic Field',
    'Arcane Eye',
    'Arcane Lock',
    'Astral Projection',
    'Augury',
    'Beacon of Hope',
    'Blade Barrier',
    'Bless',
    'Blur',
    'Burning Hands',
    'Chain Lightning',
    'Charm Person',
    'Command',
    'Commune',
    'Comprehend Languages',
    'Cone of Cold',
    'Counterspell',
    'Cure Wounds',
    'Dancing Lights',
    'Darkness',
    'Death Ward',
    'Delayed Blast Fireball',
    'Detect Magic',
    'Dimension Door',
    'Disguise Self',
    'Disintegrate',
    'Dispel Magic',
    'Divination',
    'Dominate Monster',
    'Dominate Person',
    'Dream',
    'Earthquake',
    'Etherealness',
    'Find the Path',
    'Finger of Death',
    'Fire Bolt',
    'Fire Storm',
    'Fireball',
    'Flame Strike',
    'Flaming Sphere',
    'Fly',
    'Foresight',
    'Freedom of Movement',
    'Gate',
    'Globe of Invulnerability',
    'Greater Invisibility',
    'Greater Restoration',
    'Guardian of Faith',
    'Guidance',
    'Guiding Bolt',
    'Harm',
    'Haste',
    'Heal',
    'Healing Word',
    'Heroes\' Feast',
    'Hold Person',
    'Holy Aura',
    'Ice Storm',
    'Identify',
    'Imprisonment',
    'Inflict Wounds',
    'Invisibility',
    'Knock',
    'Lesser Restoration',
    'Levitate',
    'Light',
    'Lightning Bolt',
    'Locate Creature',
    'Mage Armor',
    'Mage Hand',
    'Magic Missile',
    'Magic Weapon',
    'Major Image',
    'Mass Cure Wounds',
    'Mass Heal',
    'Mass Healing Word',
    'Mass Suggestion',
    'Maze',
    'Meteor Swarm',
    'Minor Illusion',
    'Misty Step',
    'Mordenkainen\'s Sword',
    'Irresistible Dance',
    'Passwall',
    'Poison Spray',
    'Power Word Kill',
    'Power Word Stun',
    'Prayer of Healing',
    'Prestidigitation',
    'Protection from Energy',
    'Raise Dead',
    'Ray of Frost',
    'Regenerate',
    'Remove Curse',
    'Resistance',
    'Resurrection',
    'Revivify',
    'Sacred Flame',
    'Sanctuary',
    'Shatter',
    'Shield of Faith',
    'Shield',
    'Shocking Grasp',
    'Silence',
    'Silent Image',
    'Sleep',
    'Spare the Dying',
    'Speak with Dead',
    'Spider Climb',
    'Spirit Guardians',
    'Spiritual Weapon',
    'Stoneskin',
    'Suggestion',
    'Sunburst',
    'Teleport',
    'Thaumaturgy',
    'Thunderwave',
    'Time Stop',
    'True Resurrection',
    'True Seeing',
    'Wall of Fire',
    'Wall of Stone',
    'Warding Bond',
    'Web'
]

# Fix filenames.
# for f in inputs:
#     os.rename(f, f.lower().replace(' ', '_'))

# Delete any files that aren't in the list.
# spell_list_as_files = [x.lower().replace(' ', '_') + '.md' for x in spell_list]
# for n in inputs:
#     filename = n.lower().replace(' ', '_')
#     if (filename in spell_list_as_files):
#         # print('+')
#         pass
#     else:
#         # print(f'../depreciated/box/{filename}')
#         os.rename(filename, f'../depreciated/box/{filename}')

# Append a prefix to each file.
box = {}
for n in inputs:
    with open(n, 'r') as f:
        title = n.replace('_', ' ').replace('.md', '').title()
        data = f.readlines()
        prefix = [
            '---\n',
            'layout: default\n',
            f'title: {title}\n',
            'nav_exclude: true\n',
            '---\n'
        ]
        total = prefix+data
        box[n] = total

        # with open(n, 'w') as f2:
        #     f.writelines(total)

# print(box)
for n in inputs:
    with open(n, 'w') as f:
        f.writelines(box[n])