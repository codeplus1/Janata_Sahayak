
// Read more for Syllabus In show Course Backend Start
        $(document).ready(function() {
            $('#read-more-btn').click(function() {
                var syllabusPreview = $('#syllabus-preview');
                var syllabusFull = $('#syllabus-full');
                if (syllabusPreview.is(':visible')) {
                    syllabusPreview.hide();
                    syllabusFull.show();
                    $(this).text('Read Less');
                } else {
                    syllabusPreview.show();
                    syllabusFull.hide();
                    $(this).text('Read More');
                }
            });
        });
// Read more for Syllabus In show Course Backend end

