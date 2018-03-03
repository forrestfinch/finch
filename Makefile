DIRTY_FILES=$$(git status --porcelain --untracked-files=all)

commit:
	@for path in $(DIRTY_FILES); do \
		git add $$path; \
		git commit -sm "Update $$path"; \
	done; \
	git push origin master; \
