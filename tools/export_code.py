import os

# Configurazioni
OUTPUT_FILE = 'codice_sito_completo.txt'
EXTENSIONS = ('.html', '.css', '.js', '.json')
EXCLUDE_DIRS = ('node_modules', '.git', 'asset', 'docs', 'tools', '.gemini')

def generate_code_dump():
    # Ottieni il percorso assoluto della root del progetto (directory genitore di 'tools')
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    output_path = os.path.join(project_root, OUTPUT_FILE)

    with open(output_path, 'w', encoding='utf-8') as outfile:
        outfile.write("DUMP DEL CODICE SORGENTE DEL SITO BINTWARE\n")
        outfile.write("=" * 80 + "\n\n")

        for root, dirs, files in os.walk(project_root):
            # Filtra le directory da escludere
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]

            for file in files:
                if file.endswith(EXTENSIONS):
                    # Escludi file specifici
                    if file == 'package-lock.json':
                        continue
                        
                    filepath = os.path.join(root, file)
                    rel_path = os.path.relpath(filepath, project_root)
                    
                    try:
                        with open(filepath, 'r', encoding='utf-8') as infile:
                            content = infile.read()
                            
                            outfile.write(f"\n{'=' * 80}\n")
                            outfile.write(f"FILE: {rel_path}\n")
                            outfile.write(f"{'=' * 80}\n\n")
                            outfile.write(content)
                            outfile.write("\n\n")
                    except Exception as e:
                        print(f"Errore nella lettura di {rel_path}: {e}")

    print(f"Export completato con successo nel file: {output_path}")

if __name__ == '__main__':
    generate_code_dump()
