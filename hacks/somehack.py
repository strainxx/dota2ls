import argparse

parser = argparse.ArgumentParser(description='Read Memory Python')
parser.add_argument('value', type=str, help='AAAAA')
args = parser.parse_args()
print(args.value)