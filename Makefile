HTTP_SERVER = node_modules/.bin/http-server
NODE        = node
WATCH       = watch

WFLAGS      = -n 1
PORT        = 8080

OUTDIR      = static/
CONTENT     = $(addprefix $(OUTDIR),index.html projekty.html haslo.html)
OUTPUT      = $(CONTENT) $(OUTDIR)css/style.css

all: $(OUTPUT)

$(OUTDIR)css/style.css: $(OUTDIR)css/primary.css $(OUTDIR)css/icons.css
	cat $^ > $@

$(OUTDIR)%.html: content/%.html $(OUTDIR) config.json partials/footer.mustache partials/header.mustache
	$(NODE) tools/compile.js < $< > $@

$(OUTDIR)%.html: content/%.md $(OUTDIR) config.json partials/footer.mustache partials/header.mustache
		$(NODE) tools/compile-markdown.js < $< > $@

$(OUTDIR):
	mkdir -p $(OUTDIR)

server:
	$(HTTP_SERVER) -p $(PORT) $(OUTDIR)

watch:
	$(WATCH) $(WFLAGS) $(MAKE) all

clean:
	rm -rvf $(OUTPUT)

.PHONY: server watch all clean copy
