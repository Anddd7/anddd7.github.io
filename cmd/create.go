package main

import (
	"fmt"
	"os"
	"time"

	"github.com/google/uuid"
	"github.com/spf13/cobra"
)

var CreateCmd = &cobra.Command{
	Use:   "create",
	Short: "Create blog file in post folder",
	RunE: func(cmd *cobra.Command, args []string) error {
		return create()
	},
}

var title, filename, folder string

func init() {
	CreateCmd.Flags().StringVarP(&title, "title", "t", "", "Title of the blog post")
	CreateCmd.Flags().StringVarP(&filename, "filename", "f", "", "Filename of the blog post")
	CreateCmd.Flags().StringVarP(&folder, "folder", "", "docs/post", "folder of the blog post")
	CreateCmd.MarkFlagRequired("title")
}

func create() error {
	year := time.Now().Year()
	if filename == "" {
		filename = uuid.New().String()
	}
	obj := &blog{
		title:    title,
		filename: filename,
		year:     year,
	}

	return obj.createFile()
}

func (b *blog) createFile() error {
	wd, _ := os.Getwd()
	path := fmt.Sprintf("%s/%s/%d/%s.md", wd, folder, b.year, b.filename)

	f, err := os.Create(path)
	defer f.Close()
	if err != nil {
		return err
	}

	_, err = f.Write([]byte(fmt.Sprintf("# %s", b.title)))
	if err != nil {
		return err
	}

	fmt.Printf("Blog created successfully at %s", path)

	return nil
}
